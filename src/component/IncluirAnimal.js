import {
  Content,
  Left,
  Button,
  Form,
  Icon,
  Body,
  Title,
  Right,
  Item,
  Header,
  Input,
  Text,
} from 'native-base';
import React, {Component} from 'react';
//import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import MantemAnimalForm from './MantemAnimalForm';
// import {incluirAnimal} from '../actions';
// import {bindActionCreators} from 'redux';
// import Alerta from '../util/Alerta';

class IncluirAnimal extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Incluir Animal</Title>
        </Body>
        <Right />
      </Header>
    ),
  });

  handleIncluirAnimal = animal => {
    animal.favoritoUsuarios = [];
    console.warn('Animal a ser excluído: ', animal);
  };
  render() {
    return <MantemAnimalForm onSubmit={this.handleIncluirAnimal} />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncluirAnimal);
