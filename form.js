
function generateForm(){
    return `
    <form action="" id="form"  novalidate>
    <section class="username">
        <label for="username" id="user">username</label>
        <input type="text" id="username" placeholder="enter your username" name="username">
        <small>error</small>
    </section>

    <section class="mail">
        <label for="email" id="mail">email</label>
        <input type="email" name="email" id="email" placeholder="enter your email">
        <small>error</small>
    </section>

    <section class="pass">
        <label for="pwd" id="pass">password</label>
        <input type="password" name="password" id="password">
        <small>error</small>
    </section>

    <section class="pass2">
        <label for="pwd2" id="pas2">reenter your password</label>
        <input type="password" name="re-enter-password" id="re-enter-password">
        <small>error</small>
    </section>

    <section class="sub">
        <input type="submit" value="submit" id="submit" >
    </section>
</form>
    
    
    
    
    
    
    `
}