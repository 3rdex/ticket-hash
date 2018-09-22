cleos wallet unlock -n eosiomain  --password $(cat eosiomain_wallet_password.txt)
cleos create account eosio ticketchaina EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
cleos wallet create -n ticketwal -f ticketwal_password.txt
cleos wallet import -n ticketwal --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
./scripts/deploy_contract.sh ticketchain ticketchaina ticketwal $(cat ticketwal_password.txt)
cleos create account eosio ticketticket EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
