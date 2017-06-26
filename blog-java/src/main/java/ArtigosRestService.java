package ngdemo.rest;

import ngdemo.domain.Artigo;
import ngdemo.service.ArtigoService;
import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/artigos")
public class ArtigosRestService {

    @GET
    @Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
    public ArrayList<Artigo> getArtigos() {
        ArtigoService artigoService = new ArtigoService();
        return artigoService.getArtigos();
    }
}
