package ngdemo.domain;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
// from http://www.vogella.com/articles/REST/
// JAX-RS supports an automatic mapping from JAXB annotated class to XML and JSON
public class Artigo {

    private String titulo;
    private String resumo;
    private int id;    

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setResumo(String resumo) {
        this.resumo = resumo;
    }

    public String getResumo() {
        return resumo;
    }    
}
