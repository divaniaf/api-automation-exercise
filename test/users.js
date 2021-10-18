// This is the main class to test API with JavaScript

// Using supertest library
import supertest from 'supertest';

// Constant variable for specific URL
const request = supertest('https://api.weatherbit.io/v2.0/');

// The API Key that provisioned
const TOKEN = '8c19733e8ba6447da063e5005dcc3178';

// Specific variable for case 1
const lat = '40.730610';
const lon = '-73.935242';

// Specific variable for case 2
const postal_code = '28546';

describe('Testing', () => {

    // GET for case 1
    it('GET /current?lat={lat}&lon={lon}', () => {
        return request.get(`current?lat=${lat}&lon=${lon}&key=${TOKEN}`).end((err,res) => {
            console.log(err);
            console.log(res.body);
        });
    });

    // Uncomment these two methods if you want to run for case 1 and case 2
    // it('GET /current?lat={lat}&lon={lon}', () => {
    //     return request.get(`current?lat=${lat}&lon=${lon}&key=${TOKEN}`).then((err,res) => {
    //         console.log(err);
    //         console.log(res.body);
    //     });
    // });

    // This is the method for case 2
    // But the API Key that I have does not allow access to this endpoint
    // it('GET /forecast/3hourly?postal_code={postal_code}', () => {
    //     return request.get(`forecast/3hourly?postal_code=${postal_code}&key=${TOKEN}`).end((err,res) => {
    //         console.log(err);
    //         console.log(res.body);
    //     });
    // });

});