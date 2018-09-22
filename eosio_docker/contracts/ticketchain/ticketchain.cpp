#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>
using namespace eosio;

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

    /// @abi table
    struct ticketstruct {
      uint64_t      prim_key;  // primary key
      uint64_t      hash;      // the hash of identity
      uint64_t      purchase_at; // the store the last update block time
      uint64_t      used_at; // the store the last update block time

      // primary key
      auto primary_key() const { return prim_key; }
      // secondary key: user
      uint64_t get_by_hash() const { return hash; }
    };

    // create a multi-index table and support secondary key
    typedef eosio::multi_index< N(ticketstruct), ticketstruct,
      indexed_by< N(getbyhash), const_mem_fun<ticketstruct, uint64_t, &ticketstruct::get_by_hash> >
    > tickettable;

  public:
    using contract::contract;

    /// @abi action
    void buyticket( uint64_t hash ) {
      require_auth( N(ticketticket) );

      tickettable obj(_self, _self);
      obj.emplace( _self, [&]( auto& address ) {
        address.prim_key    = obj.available_primary_key();
        address.hash        = hash;
        address.purchase_at   = now();
      });
    }

    /// @abi action
    void check( uint64_t hash ) {
      require_auth( N(ticketticket) );

      tickettable obj(_self, _self);
      auto tickets = obj.get_index<N(getbyhash)>();
      auto &ticket = tickets.get(hash);
      obj.modify( ticket, _self, [&]( auto& address ) {
        address.used_at   = now();
      });
    }
};

// specify the contract name, and export a public action: update
EOSIO_ABI( ticketchain, (buyticket)(check) )
