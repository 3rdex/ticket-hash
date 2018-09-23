cleos wallet unlock -n eosiomain  --password $(cat eosiomain_wallet_password.txt)
cleos create account eosio ticketticket EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
cleos wallet create -n ticketwal -f ticketwal_password.txt
cleos wallet import -n ticketwal --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

./scripts/deploy_contract.sh ticketchain ticketticket ticketwal $(cat ticketwal_password.txt)


cleos create account eosio ticketsella1 EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b EOS6kYgMTCh1iqpq9XGNQbEi8Q6k5GujefN9DSs55dcjVyFAq7B6b
cleos create account eosio ticketsella2 EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p EOS78RuuHNgtmDv9jwAzhxZ9LmC6F295snyQ9eUDQ5YtVHJ1udE6p
cleos wallet create -n sellerwal1 -f sellerwal1_password.txt
cleos wallet create -n sellerwal2 -f sellerwal2_password.txt
cleos wallet import -n sellerwal1 --private-key 5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5
cleos wallet import -n sellerwal2 --private-key 5KLqT1UFxVnKRWkjvhFur4sECrPhciuUqsYRihc1p9rxhXQMZBg


cleos push action ticketticket grant '["ticketsella1"]' -p ticketticket@active
cleos push action ticketticket revoke '["ticketsella1"]' -p ticketticket@active
cleos get table ticketticket ticketticket sellers


cleos push action ticketticket buyticket '[123123, "my ticket", "ticketsella1"]' -p ticketsella1@active
cleos push action ticketticket buyticket '[1233333, "my ticket", "ticketsella1"]' -p ticketsella1@active
cleos push action ticketticket check '[123123, "ticketsella1"]' -p ticketsella1@active
cleos push action ticketticket check '[1233333, "ticketsella1"]' -p ticketsella1@active

cleos get table ticketticket ticketsella1 tickets