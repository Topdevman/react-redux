
class CompaniesApi {
  static getAllCompanies() {    
    return fetch('http://127.0.0.1:5000/api/v1/companies').then(res => {
      return res.json();
    }).catch(error => {            
      return error;
    });
  }

  static updateCompany(company) {
    const request = new Request(`http://localhost:5000/api/v1/companies/${company._id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({company: company})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createCompany(company) {
    const request = new Request('http://localhost:5000/api/v1/companies/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({company: company})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteCompany(company) {
    const request = new Request(`http://localhost:5000/api/v1/companies/${company._id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CompaniesApi;
