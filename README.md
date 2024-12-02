Explicação do Código:
Estado (useState):

tempo: Armazena o tempo do cronômetro em segundos.
correndo: Booleano que indica se o cronômetro está em execução.
intervalo: Controla o setInterval, que é usado para atualizar o cronômetro a cada segundo.

Efeito (useEffect):

Quando correndo é true, um setInterval é criado para atualizar o tempo a cada segundo. Quando correndo é false, o intervalo é limpo.
O retorno de useEffect serve para limpar o intervalo caso o componente seja desmontado ou correndo mude de valor.

Funções:

iniciar: Inicia o cronômetro, colocando correndo como true.
pararEzerar: Para o cronômetro e zera o tempo.
formatarTempo: Formata o tempo em minutos e segundos para exibição.

Botões:

O botão de Iniciar só é habilitado enquanto o cronômetro não estiver correndo.
O botão de Parar/Zerar exibe "Parar" enquanto o cronômetro estiver em execução, e "Zerar" quando ele estiver parado.


Como funciona a nova abordagem:

O botão Parar vai interromper o cronômetro.
Após o cronômetro ser parado, o botão de Parar será substituído por um botão de Zerar.
O botão Zerar vai zerar o tempo do cronômetro, mas não o reiniciará.







