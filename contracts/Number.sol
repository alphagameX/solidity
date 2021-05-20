// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Number {
  
  mapping(address => uint) numbers;

  function setNum(uint _num) public {
    require(numbers[msg.sender] == 0);
    numbers[msg.sender] = _num;
  }

  function getNum(address _myAddress) public view returns (uint) {
    return numbers[_myAddress];
  }

}
