import java.util.*;
public class reversestring{
    public static void main(String[] args){
        Scanner hariom = new Scanner(System.in);
        String s= hariom.nextLine();
        StringBuilder sb = new StringBuilder(s);
       // sb.reverse();
        // System.out.println(sb.toString());
        for(int i=0;i<s.length()/2;i++){
            int front = i;
            int back = s.length()-i-1;
            char frontchar = s.charAt(front);
            char backchar = s.charAt(back);
            sb.setCharAt(front,backchar);
            sb.setCharAt(back,frontchar);
        }
        System.out.println(sb.toString());
    }
}