
export interface IExample {
  id: number;
  name: string;
  sourceCode: string;
  link: string;
}

export const examples: IExample[] = [
  {
    id:1,
    name:'Declaraciones',
    sourceCode: `#include <iostream>
using namespace std;

int main()
{
    char x = 'a';

    int num;
    num = 5;

    int num2 = 8;

    float numero;
    numero = 3.5;

    float res = numero + num2;
    //3.5 + 8 = 11.5

    res = res + num;
    //11.5 + 5 = 16.5

    bool valor = false;
    valor = true;

    res = res*2;

    cout << res << endl;

    return 0;
}
  `,
    link: 'https://www.programarya.com/Cursos/C++/Sistema-de-Tipos/Variables-y-Constantes',
  },
  {
    id:2,
    name:'If',
    sourceCode: `#include "iostream"
using namespace std;

int main()
{
    int resultado = 0;
    cout << "Cuanto es 39+50? ";
    cin >> resultado;
    if(resultado == 39+50)
    {
        cout << "Respuesta Correcta. Felicitaciones!";
    }
  return 0;
}
  `,
    link: 'https://www.programarya.com/Cursos/C++/Condicionales/Condicional-if',
  },
  {
    id: 3,
    name:'If-else',
    sourceCode: `#include "iostream"
#include "string"
#include "stdlib.h"

using namespace std;

int main()
{
    string password = "";
    cout << "Ingrese la contrasenia: ";
    cin >> password;
    if(password == "myClave")
    {
        cout << "Contrasenia correcta. Bienvenido";
    }
    else {
        cout << "Contrasenia incorrecta.";
    }

    return 0;
}`,
    link: 'https://www.programarya.com/Cursos/C++/Condicionales/Condicional-if-else',
  },
  {
    id: 4,
    name:'Ciclo for',
    sourceCode: `#include "iostream"
#include "stdlib.h"
using namespace std;
int main()
{
    int contador = 0;
    for(int i = 0; i < 10000; i++)
    {
        if(i%13 == 0)
        {
            contador = contador + 1;
        }
    }

    cout << contador << endl;
    return 0;
}`,
    link: 'https://www.programarya.com/Cursos/C++/Ciclos/Ciclo-for',
  },
  {
    id: 5,
    name:'Ciclo while',
    sourceCode: `#include "iostream"

using namespace std;
int main()
{
    int numero;
    cout <<  "Ingrese un numero ";
    cin >> numero;
    while(numero <= 100)
    {
        cout <<  "Ingrese un numero ";
        cin >> numero;
    }
    return 0;
}
  `,
    link: 'https://www.programarya.com/Cursos/C++/Ciclos/Ciclo-while',
  },
  {
    id: 6,
    name:'Ciclo Do-while',
    sourceCode: `#include "iostream"

using namespace std;
int main()
{
    int numero;
    do
    {
        cout <<  "Ingrese un numero ";
        cin >> numero;
    }
    while(numero <= 100);
    return 0;
}`,
    link: 'https://www.programarya.com/Cursos/C++/Ciclos/Ciclo-do-while',
  },
  {
    id: 6,
    name:'Operaciones',
    sourceCode: `#include "iostream"

using namespace std;

int main()
{
    int arr[5];
    int num, num2,i;
    string str;
    cin>>num>>num2>>str;
    if( num == num2)
    {
        cout<<"Números son iguales";
    }
    for(i=0; i<num; i++ )
    {
        cout<<str;
    }
    return 0;
}
  `,
    link: '',
  },
];
