import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';


export default function App(){

  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState('')


  function calcular(){
    if ( (numero1 === '') || (numero2 === '')){
      alert('É obrigatório digitar os dois preços')
      return;
    }

    res = numero1 / numero2
    if(res < 0.7){
      setResultado(('Alcool é melhor ' + res))
    }
    else{
      setResultado(('Gasolina é melhor ' + res))
    }
  }



    return(
      <View style={styles.area}>

      <Text style={styles.titulo2}>Raphael</Text>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>

      <Image
          source={{uri: 'http://minaspetro.com.br/blog/wp-content/uploads/2019/01/afinal-o-que-um-dono-de-posto-de-combustivel-deve-fazer-para-ter-sucesso-770x400.jpeg'}}
          style={styles.imagem}
        />

      <TextInput
      style={styles.input}
      placeholder="Digite o preço do alcool"
      onChangeText={ (numero) => setNumero1((numero)) }
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o preço da gasolina"
      onChangeText={ (numero) => setNumero2((numero)) }
      />

      <Button title="Verificar" onPress={calcular} />


      <Text style={styles.texto}> {resultado} </Text>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  },
  titulo2:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'black',
    marginTop: 20
  },
  imagem:{
    width: 200, 
    height: 150, 
    marginTop: 10, 
    alignSelf: "center"
  }

})


