/*Author: Janam Gupta
 *Description: Example of unchecked Exception.
 *Created on : 12/01/2020
 * */
package com.cts.exceptionhandling;

public class TestUncheckedException {
	public static void main(String args[]) {
		int a = 10;
		int b = 0;
		
		int c = a / b;//Here it will throw arithmetic Exception which can be handled by JVM though developer can also catch that exception.
		 System.out.println(c);
	}
}
