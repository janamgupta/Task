/*Author: Janam Gupta
 *Description: This is piece of code reverse string.
 *Created on : 12/01/2020
 */
package com.cts.task;

public class StringReverse {

	public static void main(String[] args) {
		String s = "Hello";
		char[] rev = s.toCharArray();
		System.out.println("the reverse of "+s+" is: ");
		for(int i = s.length()-1; i>=0; i--) {
			System.out.print(rev[i]);
		}
	}

}
