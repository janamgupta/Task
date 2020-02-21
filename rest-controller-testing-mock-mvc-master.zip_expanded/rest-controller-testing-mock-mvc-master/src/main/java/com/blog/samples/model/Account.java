package com.blog.samples.model;

import lombok.Getter;
import lombok.Setter;

public class Account {


	private Long accountId;
	
	private EnumAccountType accountType;	
	
	private Double balance;
	
	public Account(){}
	
	public Account(Long accountId, EnumAccountType accountType, Double balance){
		this.accountId = accountId;
		this.accountType = accountType;
		this.balance = balance;
	}
	
	public Account(EnumAccountType accountType, Double balance){
		this.accountType = accountType;
		this.balance = balance;
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public EnumAccountType getAccountType() {
		return accountType;
	}

	public void setAccountType(EnumAccountType accountType) {
		this.accountType = accountType;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}
	
	
}