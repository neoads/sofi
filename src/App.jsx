import Header from './components/Header';
import sofiMarketingImage from './assets/sofi_marketing.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={sofiMarketingImage} alt="Sofi Consultoria em Marketing" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Sofi Consultoria em Marketing LTDA</h1>
          <h2 className="text-2xl mb-8">40.186.123/0001-83</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Capacitar negócios com estratégias de marketing digital inovadoras e personalizadas, transformando desafios em oportunidades de crescimento e visibilidade. Com expertise e comprometimento, buscamos superar as expectativas dos nossos clientes através de soluções criativas, análises de dados precisas e um atendimento focado em resultados. Nossa missão é impulsionar o sucesso de cada cliente, construindo marcas fortes e duradouras no mercado digital."
          
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/agencia.sofi/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Sofi Consultoria em Marketing LTDA</strong>, registrada sob o CNPJ <strong className="font-bold">40.186.123/0001-83</strong>, foi fundada em <strong className="font-bold">23 de dezembro de 2020</strong>, na cidade de <strong className="font-bold">São Paulo, São Paulo</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">consultoria em marketing digital</strong>, oferecendo soluções que unem <strong className="font-bold">estratégia, criatividade e resultados</strong> para impulsionar o sucesso de nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica (CNAE 70.20-4-00)</strong>, abrangendo desde estratégias de marketing digital, gestão de redes sociais, SEO, campanhas de tráfego pago e criação de conteúdo. Com mais de <strong className="font-bold">4 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">abordagem estratégica, inovação e atendimento personalizado</strong>, sempre buscando atender às necessidades e expectativas dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Rua Diogo Pereira, 89, Complemento: Bloco 2 Apt 101, Bairro: Super Quadra Morumbi, São Paulo-SP (CEP: 05750-130)</strong>, nossa consultoria é referência no bairro e região, proporcionando soluções de marketing digital eficazes e personalizadas. Valorizamos a <strong className="font-bold">transparência, a inovação e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Sofi Consultoria em Marketing</strong>, acreditamos que <strong className="font-bold">uma estratégia de marketing bem elaborada reflete a paixão e o conhecimento de quem a cria</strong>. Por isso, nosso compromisso vai além da prestação de serviços: queremos ajudar você a construir <strong className="font-bold">marcas fortes, campanhas impactantes e resultados duradouros</strong>, seja para sua empresa ou projeto pessoal.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Consultoria em Marketing Digital</strong> – Estratégias personalizadas para o seu negócio.</li>
            <li><strong className="font-bold">Gestão de Redes Sociais</strong> – Criação de conteúdo e interação com o público.</li>
            <li><strong className="font-bold">SEO (Search Engine Optimization)</strong> – Otimização para motores de busca.</li>
            <li><strong className="font-bold">Campanhas de Tráfego Pago</strong> – Google Ads, Facebook Ads e outras plataformas.</li>
            <li><strong className="font-bold">Criação de Conteúdo</strong> – Textos, imagens e vídeos para engajar sua audiência.</li>
            <li><strong className="font-bold">Análise de Dados e Métricas</strong> – Monitoramento e otimização de resultados.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
                 <li><strong className="font-bold">Razão Social:</strong> Sofi Consultoria em Marketing LTDA</li>
            <li><strong className="font-bold">CNPJ:</strong> 40.186.123/0001-83</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 23/12/2020</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 23/12/2020</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 23/12/2020</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 1.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (SP):</strong> Não Aplicável</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Rua Diogo Pereira, 89, Complemento: Bloco 2 Apt 101, Bairro: Super Quadra Morumbi, São Paulo-SP, <strong className="font-bold">CEP 05750-130</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Sofi Consultoria em Marketing</strong>, estamos prontos para ajudar você a <strong className="font-bold">transformar seus desafios em oportunidades</strong>. Entre em contato e descubra como <strong className="font-bold">estratégias de marketing digital eficazes podem impulsionar o seu negócio!</strong> 🚀</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Transforme seu negócio! Fale Conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Sofi Consultoria em Marketing LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 40.186.123/0001-83</p>
          <p className="text-sm"><strong>Razão Social:</strong> Sofi Consultoria em Marketing LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 23/12/2020</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 1.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Diogo Pereira, 89, Complemento: Bloco 2 Apt 101, Bairro: Super Quadra Morumbi, São Paulo-SP</p>
          <p className="text-sm"><strong>CEP:</strong> 05750-130</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Impulsionando negócios com estratégias de marketing digital desde 2020</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Sofi Consultoria em Marketing LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 40.186.123/0001-83</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Diogo Pereira, 89, Complemento: Bloco 2 Apt 101, Bairro: Super Quadra Morumbi, São Paulo-SP, CEP 05750-130</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante o uso de nossos serviços de consultoria.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para contato ou propostas).</li>
                <li>Informações sobre o negócio e objetivos de marketing.</li>
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
                <li>Atendimento ao cliente, propostas, agendamento de reuniões e comunicação de projetos.</li>
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
                <li>Parceiros estratégicos (apenas informações necessárias para execução de projetos).</li>
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
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2025 Sofi Consultoria em Marketing. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

