package com.generation.jabl.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.generation.jabl.repositories.UsuarioRepository;
import com.generation.jabl.models.UsuarioModels;

@Service

public class UsuarioService {
	@Autowired
	UsuarioRepository usuariorepository;
	
	public ArrayList<UsuarioModels> obtenerUsuarios(){
		return (ArrayList<UsuarioModels>)usuariorepository.findAll();
		
	};
	
	
	public UsuarioModels guardarUsuario(UsuarioModels usuario) {
		return usuariorepository.save(usuario);
	}


public ArrayList<UsuarioModels>  obtenerPorPrioridad(Integer prioridad) {
    return usuariorepository.findByPrioridad(prioridad);
}

public Optional<UsuarioModels> obtenerPorId(Long id){
    return usuariorepository.findById(id);
}

public boolean eliminarUsuario(Long id) {
    try{
        usuariorepository.deleteById(id);
        return true;
    }catch(Exception err){
        return false;
    }
}


}
