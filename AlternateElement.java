/*Author: Janam Gupta
 *Description: This code is used to print alternate element of an 2D array.
 *Created on : 12/01/2020
 */
package com.cts.task;

import java.util.Scanner;

public class AlternateElement {

	public static void main(String[] args) {
		int count = 1;
		int row = 2;
		int col = 3;
		int arr[][] = new int[row][col];
		System.out.println("Enter element to array: ");
		Scanner sc = new Scanner(System.in);
		for(int i = 0; i < row; i++) {
			for(int j = 0; j < col; j++) {
				arr[i][j] = sc.nextInt();
			}
		}
		System.out.println("Alternate element is :");
		for(int i = 0; i < row; i++) {
			for(int j = 0; j < col; j++) {
				if(!(count % 2 == 0))
					System.out.println(arr[i][j]);
				count++;
			}
		}
	}

}
