import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListaTarefas from '../components/ListaTarefas';


describe('ListaTarefas Component', () => {
  test('Renderiza input e botão corretamente', () => {
    render(
        <ListaTarefas />
    );

    expect(screen.getByPlaceholderText('Nova tarefa')).toBeInTheDocument();
    expect(screen.getByText('Adicionar')).toBeInTheDocument();
  });

  test('Adiciona tarefa corretamente à lista', () => {
    render(
     
        <ListaTarefas />
  
    );

    const input = screen.getByPlaceholderText('Nova tarefa');
    const buttonn = screen.getByText('Adicionar');

    expect(screen.queryByText('Nova tarefa')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Nova tarefa' } });
    fireEvent.click(buttonn);

    expect(screen.getByText('Nova tarefa')).toBeInTheDocument();
  });
});
