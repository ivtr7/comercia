# Instalação de Dependências - comercIA

## Instruções para instalar tudo necessário

### 1. Node.js (inclui npm)

**Opção A: Download Manual**
1. Acesse: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador e siga as instruções
4. Marque a opção "Automatically install necessary tools"

**Opção B: Microsoft Store**
- Abra a Microsoft Store
- Procure por "Node.js"
- Instale a versão oficial

### 2. Python

**Opção A: Microsoft Store (Mais fácil)**
1. Abra a Microsoft Store
2. Procure por "Python 3.12" ou "Python 3.11"
3. Clique em Instalar

**Opção B: Download Manual**
1. Acesse: https://www.python.org/downloads/
2. Baixe a versão mais recente (3.11 ou 3.12)
3. **IMPORTANTE**: Durante a instalação, marque a opção "Add Python to PATH"
4. Execute o instalador

### 3. Após instalar Node.js e Python

1. Feche e reabra o PowerShell/Terminal
2. Verifique as instalações:
   ```powershell
   node --version
   npm --version
   python --version
   ```

3. Instale as dependências do projeto:
   ```powershell
   npm install
   ```

### 4. Verificar instalação

Execute no diretório do projeto:
```powershell
npm run dev
```

O servidor deve iniciar em http://localhost:8080

## Links Rápidos

- Node.js: https://nodejs.org/
- Python: https://www.python.org/downloads/
- Python (Microsoft Store): ms-windows-store://pdp/?productid=9NJ46SX7X90P
