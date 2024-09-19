export async function loginUser(prev: any, data: any) {


    // Register User
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    

    return  await response.json();

}