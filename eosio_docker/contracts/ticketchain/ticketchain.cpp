#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
#include <eosiolib/types.hpp>
using namespace eosio;
using std::string;
using ::eosio::string_to_name;

// Smart Contract Name: ticketchain
// Table struct:
//   ticketstruct: multi index table to store the ticket hash, purchase and use time.
//     prim_key(uint64): primary key
//     hash(uint64): account name for the user
//     purchase_at(uint64): the store the last update block time
//     used_at(uint64): the store the last update block time
// Private method:
//   isnewticket => to check if the given hash has ticket in table or not
// Public actions:
//   buy_ticket => put the ticket into the multi-index table
//   check => update the ticket use time

// Replace the contract class name when you start your own project
class ticketchain : public eosio::contract {
  private:
    bool isnewticket( uint64_t hash ) {
      tickettable obj(_self, _self);
      // get object by secordary key
      auto tickets = obj.get_index<N(getbyhash)>();
      auto ticket = tickets.find(hash);
      return ticket == tickets.end();
    }

    void check_seller_exists(account_name seller) {
      salertable st(_self, _self);
      auto itr = st.find(seller);
      eosio_assert(itr != st.end(), "Seller not exists");
    }

    /// @abi table
    struct sellers {
      uint64_t      prim_key;  // primary key
      uint64_t          time;

      // primary key
      auto primary_key() const { return prim_key; }
    };

    /// @abi table
    struct tickets {
      uint64_t      prim_key;    // primary key
      uint64_t      hash;        // the hash of identity
      string        ticket_name; // ticket name
      uint64_t      purchase_at; // the store the last update block time
      uint64_t      used_at;     // the store the last update block time

      // primary key
      auto primary_key() const { return prim_key; }
      // secondary key: user
      uint64_t get_by_hash() const { return hash; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index< N(tickets), tickets,
      indexed_by< N(getbyhash), const_mem_fun<tickets, uint64_t, &tickets::get_by_hash> >
    > tickettable;
    typedef eosio::multi_index< N(sellers), sellers> salertable;

  public:
    using contract::contract;

    /// @abi action
    void buyticket( string hash, string ticket_name, account_name seller ) {
      check_seller_exists(seller);
      tickettable obj(_self, seller);
      require_auth( seller );

      obj.emplace( seller, [&]( auto& address ) {
        address.prim_key    = obj.available_primary_key();
        address.ticket_name = ticket_name;
        address.hash        = string_to_name(hash.c_str());
        address.purchase_at = now();
      });
    }

    /// @abi action
    void check( string hash, account_name seller ) {
      check_seller_exists(seller);
      tickettable obj(_self, seller);
      require_auth( seller );

      auto tickets = obj.get_index<N(getbyhash)>();
      auto itr = tickets.find(string_to_name(hash.c_str()));
      eosio_assert(itr != tickets.end(), "Ticket not found.");
      tickets.modify( itr, seller, [&]( auto& address ) {
        address.used_at   = now();
      });
    }

    /// @abi action
    void grant( account_name seller ) {
      require_auth( _self );
      salertable obj(_self, _self);
      auto itr = obj.find(seller);
      eosio_assert(itr == obj.end(), "Seller already exists.");
      obj.emplace( _self, [&]( auto& address ) {
        address.prim_key    = seller;
        address.time        = now();
      });
    }

    /// @abi action
    void revoke( account_name seller ) {
      require_auth( _self );
      salertable obj(_self, _self);
      auto itr = obj.find(seller);
      eosio_assert(itr != obj.end(), "Seller not found.");
      obj.erase( itr );
      eosio_assert(itr != obj.end(), "Failed to remove seller.");
    }
};

// specify the contract name, and export a public action: update
EOSIO_ABI( ticketchain, (buyticket)(check)(grant)(revoke) )
