package ProductBackEnd.Task1;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Profiles {
	@Id@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer diaId;
	private String diaUname;
	private String diaFname;
	private String diaGen;
	private String  diaQuali;
	private Integer  diaAge;
	private Integer  diaMoblno;
	private String   diaEmail;
	private String[] diaLang;
	
	public Integer getDiaId() {
		return diaId;
	}
	public void setDiaId(Integer diaId) {
		this.diaId = diaId;
	}
	public String getDiaUname() {
		return diaUname;
	}
	public void setDiaUname(String diaUname) {
		this.diaUname = diaUname;
	}
	public String getDiaFname() {
		return diaFname;
	}
	public void setDiaFname(String diaFname) {
		this.diaFname = diaFname;
	}
	public String getDiaGen() {
		return diaGen;
	}
	public void setDiaGen(String diaGen) {
		this.diaGen = diaGen;
	}
	public String getDiaQuali() {
		return diaQuali;
	}
	public void setDiaQuali(String diaQuali) {
		this.diaQuali = diaQuali;
	}
	public Integer getDiaAge() {
		return diaAge;
	}
	public void setDiaAge(Integer diaAge) {
		this.diaAge = diaAge;
	}
	public Integer getDiaMoblno() {
		return diaMoblno;
	}
	public void setDiaMoblno(Integer diaMoblno) {
		this.diaMoblno = diaMoblno;
	}
	public String getDiaEmail() {
		return diaEmail;
	}
	public void setDiaEmail(String diaEmail) {
		this.diaEmail = diaEmail;
	}
	public String[] getDiaLang() {
		return diaLang;
	}
	public void setDiaLang(String[] diaLang) {
		this.diaLang = diaLang;
	}
	@Override
	public String toString() {
		return "Profiles [diaId=" + diaId + ", diaUname=" + diaUname + ", diaFname=" + diaFname + ", diaGen=" + diaGen
				+ ", diaQuali=" + diaQuali + ", diaAge=" + diaAge + ", diaMoblno=" + diaMoblno + ", diaEmail="
				+ diaEmail + ", diaLang=" + Arrays.toString(diaLang) + "]";
	}
	public Profiles(String diaUname, String diaFname, String diaGen, String diaQuali, Integer diaAge, Integer diaMoblno,
			String diaEmail, String[] diaLang) {
		super();
		this.diaUname = diaUname;
		this.diaFname = diaFname;
		this.diaGen = diaGen;
		this.diaQuali = diaQuali;
		this.diaAge = diaAge;
		this.diaMoblno = diaMoblno;
		this.diaEmail = diaEmail;
		this.diaLang = diaLang;
	}
	public Profiles() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
