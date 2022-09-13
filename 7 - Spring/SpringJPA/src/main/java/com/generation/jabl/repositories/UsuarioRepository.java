package com.generation.jabl.repositories;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import org.springframework.data.repository.CrudRepository;
import com.generation.jabl.models.UsuarioModels;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModels, Long>{
	public abstract ArrayList<UsuarioModels>findByPrioridad(Integer prioridad);
}

