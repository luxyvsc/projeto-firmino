import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  toggleNav() {
    let x = document.getElementById("nav-principal")!;
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
  }

  content = {
    about: 'Sobre',
    init: 'Inicio',
    textInit: `Alagoano, residente no conjunto Virgem dos Pobres, próximo à Lagoa Mundaú, Firmino chegou ao CRB com 14 anos, descoberto por
    um dentista, Marcellus Portella. No Galo, participou de interestaduais em São Paulo, disputou Campeonato Alagoano Infantil
    e torneios do sub-18. A saída do Galo se deu de maneira precoce. Firmino era apontado como uma das promessas do CRB, mas não
    encontrou a valorização esperada no momento de firmar um contrato profissional, o que definiu na sua ida para o Figueirense.`,
    titleFigueirense: 'Figueirense',
    textFigueirense: `Firmino ingressou nas divisões de base do Figueirense em 2008, aos 17 anos. No ano seguinte, em 2009, Firmino acabou sendo um
    dos grandes destaques da Copa São Paulo de Futebol Júnior de 2009. Firmino estreou profissionalmente em 24 de outubro de 2009,
    substituindo Toninho no intervalo, na derrota em casa por 1 a 2 contra a Ponte Preta, pela Série B.
    Em janeiro de 2010, ele foi definitivamente promovido ao elenco principal. Firmino marcou seu primeiro gol profissional em 8
    de maio de 2010, marcando na vitória por 1 a 0 contra o São Caetano. Ele contribuiu com oito gols em 36 jogos na Série B,
    onde o Figueira voltou à Série A, sendo vice-campeão da Série B de 2010, após dois anos de ausência.
    Em 1 de dezembro de 2010, ao fim da Série B, Firmino deixa o Figueirense rumo ao Hoffenheim. Firmino deixou o Figueira com
    12 gols em 53 partidas.`,
    titleHoffenheim: 'Hoffenheim',
    textHoffenheim: `Firmino transferiu-se do Figueirense para o Hoffenheim em 1 de dezembro de 2010, assinando contrato em vigor até junho de 2015.
    Sendo o contrato formalizado, e regularizado para jogar no 1899 Hoffenheim em 1 de janeiro de 2011. Firmino estreou um mês
    depois em uma derrota contra o Mainz 05 pela Bundesliga, onde entrou como substituto aos 75 minutos de Sebastian Rudy. Marcou
    seu primeiro gol pelo clube em 16 de abril, o único gol da vitória contra o Eintracht Frankfurt.
    Foi tirado do time principal em novembro de 2011 por ter chegado atrasado ao treino, perdendo a partida da liga contra o Bayer
    Leverkusen.
    No dia 27 de março de 2014, assinou um novo contrato de três anos com o Hoffenheim. Terminou a temporada 2013–14 da Bundesliga
    como o quarto maior artilheiro, com dezesseis gols, e como o segundo maior em assistências, com doze e foi nomeado a Revelação
    da Bundesliga de 2013–14.`,
    titleLiverpool: 'Liverpool',
    year15: '2015-16',
    textLiverpool: `No dia 24 de junho de 2015 o Liverpool o contratou por 41 milhões de euros (equivalente a 142 milhões de reais). Foi a segunda
    contratação mais cara da história do clube.[11][12] Firmino estreou em um amistoso de pré-temporada contra o Swindon Town, no
    dia 2 de agosto. Estreou na Premier League uma semana depois, substituindo Jordon Ibe em uma vitória por 1 a 0 contra o Stoke City.
    No dia 21 de novembro, Firmino marcou seu primeiro gol pelo Liverpool na vitória por 4 a 1 sobre o Manchester City no Etihad Stadium.
    Seu futebol melhorou quando o técnico Jürgen Klopp o colocou no papel de falso 9; com sua forma melhorada, Firmino foi eleito o
    Jogador do Mês do Liverpool em janeiro e terminou a temporada da Premier League 2015–16 como artilheiro (com 10 gols) e líder de
    assistências (com 7) dos Reds.`,
    year16: '2016-17',
    text16: `Após se consolidar como um falso 9 por Jürgen Klopp, Firmino terminou a temporada com 12 gols e 8 assistências em 38 partidas.`,
    year17: '2017-18',
    text17: `Antes do início da temporada 2017–18, Firmino trocou o número da camisa para a 9, com a nova contratação de Mohamed Salah que
    começou a usar o número 11. Firmino marcou seu primeiro gol da temporada em 12 de agosto, marcando um pênalti em 3 a 3 empate
    com o Watford. No dia 14 de janeiro, Firmino marcou em uma vitória em casa por 4 a 3 sobre o Manchester City que tirou a
    invencibilidade do clube de Manchester. No dia 10 de abril, ele marcou novamente na vitória por 2 a 1 sobre o Manchester City no
    jogo de volta das quartas de final da Liga dos Campeões da UEFA, que viu o Liverpool avançar para as semifinais com uma vitória agregada
    por 5 a 1.
    No dia 29 de abril de 2018 o atacante renovou seu vínculo junto ao time inglês, estendendo seu novo contrato até junho de 2023.
    Firmino começou e jogou os 90 minutos inteiros na final da Liga dos Campeões contra o Real Madrid, onde acabaria perdendo por 3 a 1.
    Firmino marcou 10 gols e deu 8 assistências em sua primeira Liga dos Campeões, terminando como vice-artilheiro e vice-líder de
    assistências, atrás de Cristiano Ronaldo e James Milner, respectivamente.
    Firmino também foi incluído na Seleção da temporada 2017–18 da Champions League. Terminou a temporada 2017–18 com 27 gols e 17
    assistências em 54 partidas.`,
    year18: '2018-19',
    text18: `No dia 15 de setembro, ele marcou na vitória do Liverpool por 2 a 1 sobre o Totenham, em Wembley. Firmino deixou o campo 15 minutos
    antes do final com uma lesão nos olhos. Três dias depois, ele saiu do banco para marcar em Anfield na vitória por 3 a 2 contra o PSG
    pela Liga dos Campeões. No dia 29 de dezembro, Firmino marcou seu primeiro "hat-trick" pelo Liverpool em uma vitória por 5 a 1 sobre
    o Arsenal. Já no dia 19 de janeiro de 2019, marcou o milésimo gol do Liverpool em Anfield na era da Premier League em uma vitória
    por 4 a 3 sobre o Crystal Palace.
    No dia 1 de junho de 2019, Firmino atuou na Liga dos Campeões contra o Tottenham, voltando depois de perder as últimas semanas da
    temporada com uma lesão. Ele jogou 60 minutos antes de ser substituído por Divock Origi, que marcou para o Liverpool na vitória
    por 2 a 0.`,
    year19: '2019–20',
    text19: `No dia 14 de agosto de 2019, Firmino saiu do banco de reservas na final da Supercopa da UEFA de 2019 contra o Chelsea, em uma partida
    em que o Liverpool venceu por 5 a 4 nos pênaltis. O jogo terminou 2 a 2 aos 120 minutos, com Firmino dando duas assistências para os
    dois gols de Sadio Mané. Já no dia 31 de agosto de 2019, Firmino se tornou o primeiro jogador brasileiro a marcar 50 gols na
    Premier League ao marcar na vitória por 3 a 0 sobre o Burnley. Em 18 de dezembro de 2019, entrou na semifinal do Mundial de
    Clubes e marcou o gol da classificação do Liverpool contra o Monterrey do México. Na final contra o Flamengo, Firmino acabou marcando
    o gol do título do Liverpool, em Doha no Catar.
    Na volta a Premier League, no dia 26 de dezembro de 2019, Firmino marcou dois gols na vitória de 4 a 0 sobre o Leicester, chegando ao
    150° gol na carreira.`,
  }

  ngOnInit(): void {
  }

}
