//test
const user = {
    firstName = 'Tom',
    lastName = 'Ford',
    getFuulName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
user.getFuulName();