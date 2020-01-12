/*Author: Janam Gupta
 *Description: This is piece of code replace the char at even position by its consecutive char.
 *Created on : 12/01/2020
 */
package com.cts.task;

public class Replace {

	public static void main(String[] args) {
		String s = "information";
		char arr[] = s.toCharArray();
		int i;
		System.out.println("The string is: "+ s);
		for(i = 0; i < s.length(); i++) {
			if((i + 1) % 2 == 0) {
				arr[i] = arr[i + 1];
			}
		}
		System.out.print("String after operation is: ");
		for(i = 0; i < s.length(); i++) {
			System.out.print(arr[i]);
		}
	}

}
