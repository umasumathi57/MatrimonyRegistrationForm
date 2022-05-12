package ProductBackEnd.Task1;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service// used for implements repository methods.
public class ProfileService 
{
	@Autowired 
	ProfileRepository prod;
	
	public Profiles create(Profiles pro)
	{
		return prod.save(pro);
	}
	
	public List<Profiles> list()
	{
		return (List<Profiles>)prod.findAll();
	}
	
	public Optional<Profiles> read(int val)
	{
		return prod.findById(val);
	}
	
	public String remove(int i)
	{
		String store=prod.findById(i).orElse(new Profiles()).getDiaFname()+"has removed Successfully";
		prod.deleteById(i);
		return store;
	}
	
}

