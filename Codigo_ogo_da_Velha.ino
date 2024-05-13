int velha = 1;
int linha;
int coluna;
bool haVencedor = false;
String jogador1 = "Jogador 1";
String jogador2 = "Jogador 2";
String jogada;
int tabuleiro[9];
int jogadorDaVez = 1;
// Limpar/zerar o tabuleiro
int index;
bool validaPosicao(String entrada) {
  if (entrada.length() == 3) {
    if ((entrada[0] >= '0' && entrada[0] <= '2') &&
        (entrada[2] >= '0' && entrada[2] <= '2')) {
      return true;
    }
  }
  return false;
  // Função para validar a entrada da jogada por meio de texto, o formato deve ser:
  // Primeiro caracter: 0 ou 1 ou 2
  // Segundo caracter: qualquer um
  // Terceiro caracter: 0 ou 1 ou 2
  bool entradaValida;

  entradaValida = false;

  // A entra da jogadanão pode ter mais que 3 caracteres de comprimento.
  if (entrada.length() == 3) {

    // Verifica o primeiro caracter se há somente caracteres válidos (0,1,2).
    if (entrada[0] == '0' || entrada[0] == '1' || entrada[0] == '2') {

      // Verifica o terceiro caracter se há somente caracteres válidos (0,1,2).
      if (entrada[2] == '0' || entrada[2] == '1' || entrada[2] == '2') {

        // Retorna verdadeiro se a entrada da jogada possui os caracteres e comprimentos válidos.
        entradaValida = true;
      }
    }
  }

  return entradaValida;
}

void setup() {
  Serial.begin(115200);
  for (index = 0; index <= 8; index++) {
    tabuleiro[index] = 0;
  }
}
void loop() {


  // Iniciar o jogo, definir quem joga primeiro

  // Anotar/Registrar a jogada, do primeiro jogador

  do {
    Serial.print(tabuleiro[0]);
    Serial.print(tabuleiro[1]);
    Serial.println(tabuleiro[2]);
    Serial.print(tabuleiro[3]);
    Serial.print(tabuleiro[4]);
    Serial.println(tabuleiro[5]);
    Serial.print(tabuleiro[6]);
    Serial.print(tabuleiro[7]);
    Serial.println(tabuleiro[8]);

    jogada = "";
    Serial.print("Digite posição da sua peça JOGADOR ");
    Serial.println(jogadorDaVez);
    while (!Serial.available())
      ;
    jogada = Serial.readString();

    if (validaPosicao(jogada)) {

      // Converter a jogada texto em dois inteiros linha e coluna.
      // Simula a função Serial.parseInt() do Arduino
      linha = jogada[0] - '0';
      coluna = jogada[2] - '0';
      // CORRIGIR O ERRO DE DIGITAÇÃO
      Serial.print(" Linha: ");
      Serial.println(linha);
      Serial.print("; Coluna: ");
      Serial.println(coluna);

      // Verificar se a posição 'jogada' é valida
      if (tabuleiro[3 * linha + coluna] == 0) {
        tabuleiro[3 * linha + coluna] = jogadorDaVez;
        if ((tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez) || (tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez) || (tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez)) {
          haVencedor = true;
        } else {

          // Verificar a jogada vencedora nas colunas.
          if ((tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) || (tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez) || (tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez)) {
            haVencedor = true;
          } else {

            // Verificar a jogada vencedora nas diagonais.
            if ((tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) || (tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez)) {
              haVencedor = true;
            } else {

              // Trocar o jogador
              if (jogadorDaVez == 1) {
                jogadorDaVez = 2;
              } else {
                jogadorDaVez = 1;
              }
            }
          }
        }
        velha = velha + 1;
      } else {
        Serial.println("Posição ocupada, jogue novamente !!!");

        // Informar ao Jogador 1 que a posição está preenchida, é inválida e ele precisa informar um posição válida.
      }
    } else {
      Serial.println("Jogada inválida !!!");
    }

    // Verificar a jogada vencedora nas linhas.
  } while (!haVencedor && velha <= 9);

  // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
  if (haVencedor) {
    Serial.print("Parabens pela a vitória, jogador ");
    Serial.println(jogadorDaVez);
  } else {
    Serial.println("Deu VELHA!!!");
  }
  Serial.print(tabuleiro[0]);
  Serial.print(tabuleiro[1]);
  Serial.println(tabuleiro[2]);
  Serial.print(tabuleiro[3]);
  Serial.print(tabuleiro[4]);
  Serial.println(tabuleiro[5]);
  Serial.print(tabuleiro[6]);
  Serial.print(tabuleiro[7]);
  Serial.println(tabuleiro[8]);
  for (index = 0; index <= 8; index++) {
    tabuleiro[index] = 0;
    delay(1000);
    
  } Serial.println("Partida reiniciada");
}
