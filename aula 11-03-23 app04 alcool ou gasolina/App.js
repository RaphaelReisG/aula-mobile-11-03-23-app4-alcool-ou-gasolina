import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){
    if ( (this.state.numero1 === '') || (this.state.numero2 === '')){
      alert('É obrigatório digitar os dois preços')
      return;
    }

    res = this.state.numero1 / this.state.numero2
    if(res < 0.7){
      this.setState({resultado: 'Alcool é melhor ' + res});
    }
    else{
      this.setState({resultado: 'Gasolina é melhor ' + res});
    }
  }


  render(){
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
      onChangeText={ (numero) => this.setState({numero1: numero}) }
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o preço da gasolina"
      onChangeText={ (numero) => this.setState({numero2: numero}) }
      />

      <Button title="Verificar" onPress={this.calcular} />


      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
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


export default App;