import Header from './components/Header';
import chipImage from './assets/chip.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={chipImage} alt="Chip de Cartão" className="mx-auto mb-4 w-24 h-24" />
          <h1 className="text-4xl font-bold">Pink Floyd Moveis e Decoracoes LTDA</h1>
          <h2 className="text-2xl mb-8">68.328.681/0001-55</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer móveis e soluções de decoração com qualidade, estilo e inovação, transformando ambientes em espaços únicos e acolhedores. Com mais de 30 anos de tradição no mercado, buscamos superar as expectativas dos nossos clientes através de um atendimento personalizado, produtos duráveis e design inspirador, sempre com transparência e comprometimento. Nossa missão é ajudar a criar lares que reflitam personalidade, conforto e sofisticação, tornando cada projeto uma experiência memorável."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (11) 94098-2632</p>
          <p className="text-lg">E-mail: mariana.33de.carvalho@outlook.com</p>
          <p className="text-lg">INSTAGRAM.</p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Pink Floyd Móveis e Decorações LTDA</strong>, registrada sob o CNPJ <strong className="font-bold">68.328.681/0001-55</strong>, foi fundada em <strong className="font-bold">14 de agosto de 1992</strong>, na cidade de <strong className="font-bold">São Paulo, São Paulo</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">comércio varejista de móveis e decorações</strong>, oferecendo produtos que unem <strong className="font-bold">design, qualidade e funcionalidade</strong> para transformar ambientes residenciais e comerciais.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Comércio Varejista de Móveis (CNAE 47.54-7-01)</strong>, abrangendo desde móveis planejados até peças decorativas que complementam e personalizam cada espaço. Com mais de <strong className="font-bold">30 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">variedade de estilos, durabilidade dos produtos e atendimento especializado</strong>, sempre buscando atender às necessidades e expectativas dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Rua Renato Rinaldi, 1012, Vila Carrão, São Paulo-SP (CEP 03426-000)</strong>, nossa loja é referência no bairro e região, proporcionando uma experiência de compra agradável e personalizada. Valorizamos a <strong className="font-bold">transparência, o bom gosto e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Pink Floyd Móveis e Decorações LTDA</strong>, acreditamos que <strong className="font-bold">um ambiente bem decorado reflete a personalidade de quem o habita</strong>. Por isso, nosso compromisso vai além da venda de móveis: queremos ajudar você a criar <strong className="font-bold">espaços únicos, confortáveis e cheios de estilo</strong>, seja em casa ou no trabalho.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Móveis para Sala, Quarto, Cozinha e Escritório</strong> – Peças que combinam <strong className="font-bold">design, ergonomia e sofisticação</strong>.</li>
            <li><strong className="font-bold">Decoração e Acessórios</strong> – Itens que complementam e dão vida aos ambientes.</li>
            <li><strong className="font-bold">Atendimento Personalizado</strong> – Auxílio na escolha dos melhores produtos para seu espaço.</li>
            <li><strong className="font-bold">Qualidade e Durabilidade</strong> – Móveis resistentes e feitos para durar.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Pink Floyd Móveis e Decorações LTDA</li>
            <li><strong className="font-bold">CNPJ:</strong> 68.328.681/0001-55</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 14/08/1992</li>
            <li><strong className="font-bold">Porte:</strong> Sem Enquadramento</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 10.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (SP):</strong> 113.476.250.112</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Rua Renato Rinaldi, 1012, Vila Carrão, São Paulo-SP, <strong className="font-bold">CEP 03426-000</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> (Informe o contato da empresa, se disponível)</p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Pink Floyd Móveis e Decorações LTDA</strong>, estamos prontos para ajudar você a <strong className="font-bold">criar o lar dos seus sonhos</strong>. Visite-nos e descubra como <strong className="font-bold">móveis bem escolhidos podem transformar qualquer espaço em um lugar especial!</strong> 🛋️✨</p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Fale comigo:</h2>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Pink Floyd Móveis e Decorações LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 68.328.681/0001-55</p>
          <p className="text-sm"><strong>Razão Social:</strong> PINK FLOYD MOVEIS E DECORACOES LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 14/08/1992</p>
          <p className="text-sm"><strong>Porte:</strong> Sem Enquadramento</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 10.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Renato Rinaldi, 1012, Vila Carrão, São Paulo-SP</p>
          <p className="text-sm"><strong>CEP:</strong> 03426-000</p>
          <p className="text-sm"><strong>E-mail:</strong> mariana.33de.carvalho@outlook.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (11) 94098-2632</p>
          <p className="text-sm italic mt-4">Transformando ambientes com estilo e qualidade desde 1992</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Pink Floyd Móveis e Decorações LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 68.328.681/0001-55</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Renato Rinaldi, 1012, Vila Carrão, São Paulo-SP, CEP 03426-000</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante visitas à nossa loja física.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou entregas).</li>
                <li>Preferências de estilo e necessidades de decoração.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de visitas e confirmação de entregas.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de logística (apenas informações necessárias para entrega).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (11) 94098-2632</li>
            <li><strong className="font-bold">E-mail:</strong> mariana.33de.carvalho@outlook.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Pink Floyd Móveis e Decorações LTDA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

