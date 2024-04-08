import styled from 'styled-components'

export const ListaVagasEstilo = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
    margin-top: 32px;
  }

  ul ul {
    display: block;s
  }

  ul (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`
