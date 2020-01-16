/*Author: Janam Gupta
 *Description: This is piece of code shows how to handle checked Exception.
 *Created on : 12/01/2020
 * */
package com.cts.exceptionhandling;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class TestCheckedException {

	public static void main(String[] args) {
		FileInputStream fs = null;
		try {
			fs = new FileInputStream("abc.txt");
			fs.read();
		} catch (FileNotFoundException e) {
			System.out.println("The file not found at location");// Handle checked Exception
		}
		 catch (IOException e) {
				System.out.println("The file not found at location");//as file not found exception is subclass of IOException it must be catch first
			}
	}
}
