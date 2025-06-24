criarCartao(
    "Categoria",    
    "Pergunta",  
    "Resposta" 
);

criarCartao(
    "Q1",    
    "Quais são as principais diferenças entre répteis e anfíbios em termos de habitat e características fisiológicas?",  
    "São animais de sangue frio (ectotérmicos) e têm pele coberta por escamas ou placas córneas, o que os ajuda a conservar a água. Eles habitam principalmente ambientes secos e têm ovos com casca dura, que evitam a desidratação. Já os anfíbios também são ectotérmicos, mas precisam de água ou ambientes úmidos para sobreviver, especialmente na fase larval. Sua pele é permeável à água e trocas gasosas, e eles geralmente têm ovos gelatinosos, sem casca dura, que precisam de ambientes aquáticos ou úmidos."
);

criarCartao(
    "Q2",    
    "Como as abelhas contribuem para a polinização e por que isso é essencial para os ecossistemas?",  
    "As abelhas são polinizadoras essenciais, transportando pólen de flor em flor enquanto buscam néctar. Isso ajuda na reprodução de muitas plantas, incluindo culturas agrícolas. Sem a polinização, a produção de alimentos e a biodiversidade dos ecossistemas seriam drasticamente afetadas." 
);

criarCartao(
    "Q3",    
    "Quais são os animais mais adaptados a viver em ambientes de grande altitude, como os Andes ou o Himalaia?",  
    "Animais como a lhamas, buitres-de-cabeça-preta e o tigre-da-neve são bem adaptados a altas altitudes. Esses animais possuem adaptações fisiológicas como maior capacidade de transporte de oxigênio e metabolismo mais lento para lidar com o ar rarefeito." 
);

criarCartao(
    "Q4",    
    "O que é o efeito de borda e como ele impacta a biodiversidade nas florestas tropicais?",  
    "O efeito de borda se refere às mudanças nas condições ambientais ao longo da margem de um habitat natural, como uma floresta. Isso pode afetar a biodiversidade de várias maneiras, como aumentar a exposição à luz solar, modificar a temperatura e aumentar o risco de incêndios. Animais e plantas que dependem de condições específicas podem ser mais vulneráveis."
);

criarCartao(
    "Q5",    
    "O que diferencia os vertebrados dos invertebrados?",  
    "Os vertebrados possuem coluna vertebral e crânio, enquanto os invertebrados não possuem coluna vertebral." 
);

criarCartao(
    "Q6",    
    "Quais são as principais classes de vertebrados e um exemplo de cada uma?",  
    "Peixes (ex: salmão), Anfíbios (ex: rã), Répteis (ex: jacaré), Aves (ex: águia), Mamíferos (ex: leão)" 
);

criarCartao(
    "Q7",    
    "Como funciona a metamorfose em anfíbios, como os sapos?",  
    "Os sapos passam por uma metamorfose completa: nascem como girinos (com cauda e brânquias), depois desenvolvem pernas, perdem a cauda e passam a respirar pelos pulmões como adultos." 
);

criarCartao(
    "Q8",    
    "Qual a importância dos insetos para os ecossistemas?",  
    "Insetos polinizam plantas, reciclam matéria orgânica, servem de alimento para outros animais e ajudam no controle de pragas." 
);

criarCartao(
    "Q9",    
    "O que é simetria corporal e quais são os tipos mais comuns nos animais?",  
    "Simetria corporal é a forma como o corpo de um animal é organizado. Os principais tipos são: Simetria bilateral (ex: humanos), Simetria radial (ex: águas-vivas), Assimetria (ex: esponjas-do-mar)" 
);

criarCartao(
    "Q10",    
    "Como os mamíferos se diferenciam dos demais grupos de animais?",  
    "Mamíferos possuem glândulas mamárias (produzem leite), pelos em alguma fase da vida, são de sangue quente e a maioria dá à luz filhotes vivos." 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});