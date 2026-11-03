import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estados da lâmpada secreta
  const [isLigada, setIsLigada] = useState(false);
  const [statusMsg, setStatusMsg] = useState('Sistema em repouso.');

  // useEffect monitorando a lâmpada oculta
  useEffect(() => {
    if (isLigada) {
      setStatusMsg('💡 Efeito ativado: Energia fluindo na rede!');
    } else {
      setStatusMsg('Sistema em repouso.');
    }
  }, [isLigada]);

  const handleLogin = () => {
    console.log('Tentativa de login com:', { email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F9" />

      <View style={styles.content}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Painel de Acesso</Text>
          <Text style={styles.subtitle}>Entre para gerenciar o sistema</Text>
        </View>

        {/* Formulário de Login */}
        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#8E8E93" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="exemplo@email.com"
              placeholderTextColor="#C7C7CC"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} color="#8E8E93" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Sua senha"
              placeholderTextColor="#C7C7CC"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* Easter Egg: Lâmpada Escondida no Rodapé */}
        <View style={styles.easterEggContainer}>
          <Text style={styles.statusText}>{statusMsg}</Text>
          <TouchableOpacity 
            onPress={() => setIsLigada(!isLigada)} 
            activeOpacity={0.6}
            style={styles.lampButton}
          >
            <Text style={styles.lampadaEmoji}>{isLigada ? '💡' : '🔌'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3A3A3C',
    marginBottom: 8,
    marginTop: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1C1C1E',
  },
  button: {
    backgroundColor: '#4A90E2',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  easterEggContainer: {
    marginTop: 40,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    paddingTop: 16,
  },
  statusText: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 8,
  },
  lampButton: {
    padding: 4,
  },
  lampadaEmoji: {
    fontSize: 24,
    opacity: 0.7,
  },
});