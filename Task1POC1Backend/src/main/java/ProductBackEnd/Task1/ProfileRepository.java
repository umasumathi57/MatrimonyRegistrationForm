package ProductBackEnd.Task1;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends CrudRepository <Profiles, Integer> //Integer -Primary key
{

}
