package com.fullstack.springboot.controller;

import com.fullstack.springboot.exception.ResourceNotFoundException;
import com.fullstack.springboot.model.Employee;
import com.fullstack.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    //get employee by ID rest api
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No employee with ID: " + id + " found."));
        return ResponseEntity.ok(employee);
    }

    //update employee REST API
    @PutMapping("{id}/edit")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails){
        Employee employeeToUpdate = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No employee with ID: " + id + " found."));

        employeeToUpdate.setFirstName(employeeDetails.getFirstName());
        employeeToUpdate.setLastName(employeeDetails.getLastName());
        employeeToUpdate.setEmailId(employeeDetails.getEmailId());
        employeeToUpdate.setPhoneNum(employeeDetails.getPhoneNum());
        employeeToUpdate.setAddress(employeeDetails.getAddress());
        employeeToUpdate.setCity(employeeDetails.getCity());
        employeeToUpdate.setTitle(employeeDetails.getTitle());
        employeeToUpdate.setDivision(employeeDetails.getDivision());

        employeeRepository.save(employeeToUpdate);
        return ResponseEntity.ok(employeeToUpdate);
    }

    //delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No employee with ID: " + id + " found."));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
