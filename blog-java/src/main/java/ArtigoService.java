package ngdemo.service;
import java.util.ArrayList;
import ngdemo.domain.Artigo;

public class ArtigoService {

    public ArrayList<Artigo> getArtigos() {
        ArrayList<Artigo> artigos = new ArrayList<Artigo>();

        Artigo artigo1 = new Artigo();        
        artigo1.setTitulo("HTML 5 Videos");
        artigo1.setId(1);
        artigo1.setResumo("Com a tag nativa de video voce possui uma experiencia muito mais integrada no seu navegador e pode beneficiar-se de diversas possibilidades de manipulacao de video no contexto do HTML...");        

        Artigo artigo2 = new Artigo();       
        artigo2.setTitulo("HTML 5: novos campos de formulario");
        artigo2.setId(2);
        artigo2.setResumo("O HTML 5 permite editar conteudos direto na pagina, alem de disponibilizar diversos novos tipos de campos formulario...");

        artigos.add(artigo1);
        artigos.add(artigo2);        

        return artigos;
    }
}
