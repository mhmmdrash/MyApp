// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DARKToken is ERC20 {

    address public owner;

    constructor() ERC20("DarkCoin", "DARK") {
        _mint(msg.sender, 10000 * 10 ** 18);
        owner = msg.sender;
    }

    function mint(address to, uint amount) public {
        require(msg.sender == owner);
        _mint(to, amount);   
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}

