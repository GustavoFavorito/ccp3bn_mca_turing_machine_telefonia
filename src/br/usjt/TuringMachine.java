//Implementação em Java de um programa que simule a Máquina de Turing construída e permita que o usuário visualize a
//discagens (chamadas) e seus respectivos resultados. Exemplos:
//
//        Para a discagem: (0) 1 46 06 75 21 o sistema deve exibir cada passo desta entrada na MT  e, ao final,
//        a mensagem: “região parisiense”.
//
//        Para a discagem: (0) 9 46 06 75 21 o sistema deve exibir cada passo desta entrada na MT e, ao final,
//        a mensagem: “discagem incorreta”.
//
//        Para a discagem: 33 1 4411-1030 o sistema deve exibir cada passo desta entrada na MT e, ao final,
//        a mensagem: “chamada do Brasil para região parisiense”.

package br.usjt;

import java.util.Scanner;

// classe responsavel pela simulacao da maquina de Turing
public class TuringMachine {

    public static void main (String[]args) {

        // criacao do objeto Scanner para recuperacao de dados do usuario
        Scanner numero = new Scanner(System.in);

        // mensagem de saida
        String msg;

        // mensagem de apresentacao
        System.out.println("\n----> BEM VINDO <---");
        System.out.println("SERVICO DE TELEFONIA\n");

        // numero a ser verificado
        System.out.print("Insira o numero: ");
        String verificacao = numero.nextLine();

        // splita a string de verificacao
        String[] parts = verificacao.split("");

        if (verificacao.length() == 10) {
            if ("0".equals(parts[0])) {
                switch(parts[1]) {
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                        msg = "Digito Geografico";
                        break;
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        msg = "Digito Nao Geografico";
                        break;
                }

            } else {
                System.out.println("***NUMERO INVALIDO***");
            }
        } else {
            System.out.println("***NUMERO INVALIDO***");
        }

//        for (String part : parts) {
//            System.out.print(part + " ");
//        }
    }
}