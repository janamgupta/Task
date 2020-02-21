package com.blog.samples.controller;

import org.springframework.stereotype.Component;

import com.blog.samples.model.Account;
import com.blog.samples.model.EnumAccountType;

@Component
public class AccountService {
	
	public Account loadAccount(Long accountId) {
		return new Account();
	}
	
	public Long createAccount(Account account) {
		System.out.println("Account created");
		return 123l;
	}
}