// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract StickMan is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string private baseExtension;       // Base Extension of NFT
    string private baseURI;             // Base URL of NFT Data
  
    uint256 public totalCurrentSupply;  // Current Amount of NFTS Minted
    uint256 public maxSupply;           // Total Number of NFTs
    uint256 public mintPrice;           // Price to mint an NFT
    uint256 public maxMintAmount;       // Maximum Ammount a wallet can hold
    bool public isPublicMintEnabled;    // Check if Users can mint


    constructor()ERC721("StickMan","STM"){
        totalCurrentSupply = 0;
        maxSupply = 1000;
        mintPrice = 0.15 ether;
        maxMintAmount = 20;
        baseExtension = ".json";
        baseURI = 'ipfs://QmNSbbtaZ1Bnii5kHRf73wN8sjJbRthHyfspFCowt6BRNH/';
    }

    // Set the Minting Price
    function setMintPrice(uint256 _mintPrice) external onlyOwner {
        mintPrice = _mintPrice;
    }

    // Set Maximimum ammount a wallet can hold
    function setMaxMintAmount(uint256 _maxMintAmount) external onlyOwner {
        maxMintAmount = _maxMintAmount;
    }

    function baseTokenURI() public view returns (string memory) {
        return baseURI;
    }

    // Set Base Extension
    function setBaseExtension(string memory _baseExtension) external onlyOwner {
        baseExtension = _baseExtension;
    }

    // Internal function to set base_uri
    function _setBaseURI(string memory _baseUri) external onlyOwner {
        baseURI = _baseUri;
    }

    // Create function to enable/disable minting
    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner {
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    // Override tokenURI to include baseExtension
    // TODO: Remove this an change it directly from the contract
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), baseExtension)) : "";
    }

    // Override get _baseURI to impliment tokenURI concatination in ERC721
    // TODO: Remove this an change it directly from the contract
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    // Create Minting Function
    function mint(uint256 quantity) public payable {
        require(isPublicMintEnabled,'Minting is not enabled');
        require(msg.value == quantity * mintPrice, 'Wrong mint value sent');
        require(totalCurrentSupply + quantity <= maxSupply, 'Sold out');
        //TODO:Set Max per wallet?
        
        // Mint the token
        for (uint256 i=0;i < quantity;i++){
            uint256 newTokenId = totalCurrentSupply + 1;
            totalCurrentSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}