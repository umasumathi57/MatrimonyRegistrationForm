package ProductBackEnd.Task1;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController // Json as reposne eg-REST API
@CrossOrigin(origins="http://localhost:3000")
public class ProfileController 
{
	@Autowired 
	ProfileService service;
	
	@PostMapping("/Newadd")
	public String startCreate(@RequestBody Profiles pro)
	{
		return service.create(pro).getDiaFname()+"has been Added Successfully";
	}
	
	@GetMapping("/view")
	public List<Profiles> startList()
	{
		return service.list();
	}
	
	@GetMapping("/reading/{news}")
	public Optional<Profiles> startRead(@PathVariable("news") int news)
	{
		return service.read(news);
	}
	
	@PutMapping("/update")
	public String startUpdate(@RequestBody Profiles pro)
	{
		return service.create(pro).getDiaFname()+"has modified";
	}
	
	@DeleteMapping("/del/{d}")
	public String startDelete(@PathVariable("d") int d)
	{
		return service.remove(d);
	}

}
