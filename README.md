# 3-fi: Decentralized Music Streaming Build with Arweave

This is decentralized music storage and streaming application built with Moralis, using Arweave and bundlr for data storage and has contracts deployed on Polygon's Mumbai testnet.

'Albums' are ERC721 NFT collections and songs are the individual tokens in the collection

Currently, there is only one deployed album which has songs in it, '3fi Samples'.

The NFT metadata standard is fully compliant with that of Opensea and could (in the future) allow artists to expand monetization options through that route.


## Functionality

The app uses Moralis' parses token data from deployed NFT Contracts and fetches token Metadata from from arweave to stream songs. 

The support for arweave based metadata essentially allows artists to showcase and potentially monetize their NFTs and for users to consume the same while having the assurity of data permanence. The addition of blockchain based verification also has the potential to decrease inflated streaming statistics and bot-based manipulation.

Authenticated users can also select and save 'Favorite' albums.

## Run Locally

Clone this repo and then run:

`yarn install`

and

`yarn start`

## Important considerations/ommissions

The current metadata is stored using bundlr's devnet, hence the loading speed can *sometimes* be quite slow for playing songs (worst-case around 20-25 secs), please bear with me on this as significant improvement is expected using fully paid tiers.

Certain features were omitted even though code is ready (expected to be published in a few days) due to the below reasons:

Social Login: Login using Twitter, Facebook, Google, etc. through Web3Auth was omitted as there is currently an issue with Moralis' integration of Web3Auth due to faulty RPC URL configuration.

Allowing users to upload: Allowing users to create NFT albums and upload data through Bundlr was omitted due to UI issues with current implementations of Bundlr when used alongside Moralis and also being unable to test this sufficiently because of associated costs.


Thanks for looking through!
