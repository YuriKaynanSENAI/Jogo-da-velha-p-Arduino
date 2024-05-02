﻿<?xml version="1.0"?>
<flowgorithm fileversion="4.0">
    <attributes>
        <attribute name="name" value=""/>
        <attribute name="authors" value="Instrutor"/>
        <attribute name="about" value=""/>
        <attribute name="saved" value="2024-05-02 07:57:30 "/>
        <attribute name="created" value="SW5zdHJ1dG9yO0VDRTQzNlNFTkFJWFg7MjAyNC0wNC0xODsiMTA6MDE6MTggIjszMDc5"/>
        <attribute name="edited" value="SW5zdHJ1dG9yO0VDRTQzNk1BS0VSOzIwMjQtMDQtMTk7IjEyOjQ3OjU1ICI7MjtJbnN0cnV0b3I7RUNFNDM2TUFLRVI7MjAyNC0wNC0xOTsiMTE6NDA6MTAgIjs1OTg1"/>
        <attribute name="edited" value="SW5zdHJ1dG9yO0VDRTQzNk1BS0VSOzIwMjQtMDQtMTk7IjEyOjQ4OjA4ICI7NTszMDI4"/>
        <attribute name="edited" value="SW5zdHJ1dG9yO0VDRTQzNlNFTkFJWFg7MjAyNC0wNS0wMjsiMDc6NTc6MzAgIjsxNjszMjQ2"/>
    </attributes>
    <function name="Main" type="None" variable="">
        <parameters/>
        <body>
            <comment text="Criar o tabuleiro e jogadores, zerar as vari&#225;veis.&#13;&#10;&#13;&#10;0: Posi&#231;&#227;o vazia&#13;&#10;1: jogada na Posi&#231;&#227;o do jogador 1&#13;&#10;2: jogada na Posi&#231;&#227;o do jogador 2"/>
            <declare name="velha" type="Integer" array="False" size=""/>
            <declare name="linha" type="Integer" array="False" size=""/>
            <declare name="coluna" type="Integer" array="False" size=""/>
            <declare name="HaVencedor" type="Boolean" array="False" size=""/>
            <assign variable="HaVencedor" expression="false"/>
            <declare name="tabuleiro" type="Integer" array="True" size="9"/>
            <comment text="Limpar/zerar o tabuleiro"/>
            <declare name="index" type="Integer" array="False" size=""/>
            <for variable="index" start="0" end="8" direction="inc" step="1">
                <assign variable="tabuleiro[index]" expression="0"/>
            </for>
            <declare name="jogador1" type="String" array="False" size=""/>
            <assign variable="jogador1" expression="&quot;Jogador 1&quot;"/>
            <declare name="jogador2" type="String" array="False" size=""/>
            <assign variable="jogador2" expression="&quot;Jogador 2&quot;"/>
            <declare name="jogada" type="String" array="False" size=""/>
            <comment text="Iniciar o jogo, definir quem joga primeiro"/>
            <declare name="JogadorDaVez" type="Integer" array="False" size=""/>
            <assign variable="JogadorDaVez" expression="1"/>
            <comment text="Anotar/Registrar a jogada, do primeiro jogador"/>
            <assign variable="velha" expression="1"/>
            <do expression="!HaVencedor &amp;&amp; velha&lt;=9">
                <output expression="tabuleiro[0] &amp; tabuleiro[1] &amp; tabuleiro[2]" newline="True"/>
                <output expression="tabuleiro[3] &amp; tabuleiro[4] &amp; tabuleiro[5]" newline="True"/>
                <output expression="tabuleiro[6] &amp; tabuleiro[7] &amp; tabuleiro[8]" newline="True"/>
                <assign variable="jogada" expression="&quot;&quot;"/>
                <output expression="&quot;Digite a posi&#231;&#227;o da sua pe&#231;a JOGADOR &quot; &amp; JogadorDaVez" newline="True"/>
                <input variable="jogada"/>
                <if expression="validaPosicao(jogada)">
                    <then>
                        <comment text="Converter a jogada texto em dois inteiros linha e coluna."/>
                        <comment text="Simula a fun&#231;&#227;o Serial.parseInt() do Arduino"/>
                        <assign variable="linha" expression="ToInteger(Char(jogada,0))"/>
                        <comment text="CORRIGIR O ERRO DE DIGITA&#199;&#195;O"/>
                        <assign variable="coluna" expression="toInteger(Char(jogada,2))"/>
                        <output expression="&quot;Linha: &quot; &amp; linha &amp; &quot;; Coluna: &quot; &amp; coluna" newline="True"/>
                        <comment text="Verificar se a posi&#231;&#227;o 'jogada' &#233; valida"/>
                        <if expression="tabuleiro[3*linha+coluna] == 0">
                            <then>
                                <assign variable="tabuleiro[3*linha+coluna]" expression="JogadorDaVez"/>
                                <if expression="(tabuleiro[0]==JogadorDaVez &amp;&amp; tabuleiro[1]==JogadorDaVez &amp;&amp; tabuleiro[2]==JogadorDaVez) ||&#13;&#10;(tabuleiro[3]==JogadorDaVez &amp;&amp; tabuleiro[4]==JogadorDaVez &amp;&amp; tabuleiro[5]==JogadorDaVez) ||&#13;&#10;(tabuleiro[6]==JogadorDaVez &amp;&amp; tabuleiro[7]==JogadorDaVez &amp;&amp; tabuleiro[8]==JogadorDaVez)">
                                    <then>
                                        <assign variable="HaVencedor" expression="true"/>
                                    </then>
                                    <else>
                                        <comment text="Verificar a jogada vencedora nas colunas."/>
                                        <if expression="(tabuleiro[0]==JogadorDaVez &amp;&amp; tabuleiro[3]==JogadorDaVez &amp;&amp; tabuleiro[6]==JogadorDaVez) || &#13;&#10;(tabuleiro[1]==JogadorDaVez &amp;&amp; tabuleiro[4]==JogadorDaVez &amp;&amp; tabuleiro[7]==JogadorDaVez) ||&#13;&#10;(tabuleiro[2]==JogadorDaVez &amp;&amp; tabuleiro[5]==JogadorDaVez &amp;&amp; tabuleiro[8]==JogadorDaVez)">
                                            <then>
                                                <assign variable="HaVencedor" expression="true"/>
                                            </then>
                                            <else>
                                                <comment text="Verificar a jogada vencedora nas diagonais."/>
                                                <if expression="(tabuleiro[0]==JogadorDaVez &amp;&amp; tabuleiro[4]==JogadorDaVez &amp;&amp; tabuleiro[8]==JogadorDaVez) || &#13;&#10;(tabuleiro[2]==JogadorDaVez &amp;&amp; tabuleiro[4]==JogadorDaVez &amp;&amp; tabuleiro[6]==JogadorDaVez)">
                                                    <then>
                                                        <assign variable="HaVencedor" expression="true"/>
                                                    </then>
                                                    <else>
                                                        <comment text="Trocar o jogador"/>
                                                        <if expression="JogadorDaVez==1">
                                                            <then>
                                                                <assign variable="JogadorDaVez" expression="2"/>
                                                            </then>
                                                            <else>
                                                                <assign variable="JogadorDaVez" expression="1"/>
                                                            </else>
                                                        </if>
                                                    </else>
                                                </if>
                                            </else>
                                        </if>
                                    </else>
                                </if>
                                <assign variable="velha" expression="velha + 1"/>
                            </then>
                            <else>
                                <output expression="&quot;Posi&#231;&#227;o ocupada, jogue novamente !!!&quot;" newline="True"/>
                                <comment text="Informar ao Jogador 1 que a posi&#231;&#227;o est&#225; preenchida, &#233; inv&#225;lida e ele precisa informar um posi&#231;&#227;o v&#225;lida."/>
                            </else>
                        </if>
                    </then>
                    <else>
                        <output expression="&quot;Jogada inv&#225;lida !!!&quot;" newline="True"/>
                    </else>
                </if>
                <comment text="Verificar a jogada vencedora nas linhas."/>
            </do>
            <comment text="Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo."/>
            <if expression="HaVencedor">
                <then>
                    <output expression="&quot;Parab&#233;ns pela a vit&#243;ria, jogador &quot; &amp; JogadorDaVez" newline="True"/>
                </then>
                <else>
                    <output expression="&quot;Deu VELHA!!!&quot;" newline="True"/>
                </else>
            </if>
            <output expression="tabuleiro[0] &amp; tabuleiro[1] &amp; tabuleiro[2]" newline="True"/>
            <output expression="tabuleiro[3] &amp; tabuleiro[4] &amp; tabuleiro[5]" newline="True"/>
            <output expression="tabuleiro[6] &amp; tabuleiro[7] &amp; tabuleiro[8]" newline="True"/>
        </body>
    </function>
    <function name="getValArrayInt" type="Integer" variable="valor">
        <parameters>
            <parameter name="linha" type="Integer" array="False"/>
            <parameter name="coluna" type="Integer" array="False"/>
            <parameter name="Matriz" type="Integer" array="True"/>
            <parameter name="qtdeLinhas" type="Integer" array="False"/>
        </parameters>
        <body>
            <declare name="valor" type="Integer" array="False" size=""/>
            <assign variable="valor" expression="Matriz[qtdeLinhas * linha + coluna]"/>
        </body>
    </function>
    <function name="validaPosicao" type="Boolean" variable="entradaValida">
        <parameters>
            <parameter name="entrada" type="String" array="False"/>
        </parameters>
        <body>
            <declare name="entradaValida" type="Boolean" array="False" size=""/>
            <assign variable="entradaValida" expression="false"/>
            <output expression="Len(entrada)" newline="True"/>
            <if expression="Len(entrada)==3">
                <then>
                    <output expression="&quot;Comprimento da string igual  3&quot;" newline="True"/>
                    <if expression="Char(entrada,0) == &quot;0&quot; || Char(entrada,0) == &quot;1&quot; || Char(entrada,0) == &quot;2&quot;">
                        <then>
                            <output expression="Char(entrada,0)" newline="True"/>
                            <if expression="Char(entrada,2) == &quot;0&quot; || Char(entrada,2) == &quot;1&quot; || Char(entrada,2) == &quot;2&quot;">
                                <then>
                                    <output expression="Char(entrada,2)" newline="True"/>
                                    <assign variable="entradaValida" expression="true"/>
                                </then>
                                <else/>
                            </if>
                        </then>
                        <else/>
                    </if>
                </then>
                <else/>
            </if>
        </body>
    </function>
</flowgorithm>