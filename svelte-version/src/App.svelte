<script>
  import CountdownForm from "./lib/CountdownForm.svelte";
</script>

<header>
  <h1 class='demo-title'>HTML COUNTDOWN FORM</h1>
</header>

<main>
  <h2>Large Countdown Form - Light</h2>
  <CountdownForm />
</main>

<span class='seperator'></span>

<div class="control-buttons">
    <button class="control-button prev-button">Prev</button>
    <button class="control-button next-button">Next</button>
</div>

<footer>
  &copy; copyright gugino 2023, all rights reserved.
</footer>

<style>
header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24pt;
    user-select: none;
    background: #463F3A;
    height: 8rem;
    border-radius: 0 0 6px 6px;
}

h1{
    color: #F4F3EE;
    transition: color ease-in-out 200ms;
}

h1:hover{
    color: #E0AFA0;
}

h2{
    text-align: center;
    margin: 1rem 0;
    user-select: none;
    text-decoration: underline;
    color: #1A1A1A;
    opacity: 80%;
}

main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
}

.control-buttons{
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    gap: 1rem;
}

.control-button{
    padding: 0.8rem 2rem;
    border-radius: 6px;
    border: 1px solid #BCB8B1;
    background: #BCB8B1;
    font-size: 18px;
    font-weight: 600;
    color: var(--gray-black);
    opacity: 90%;
    transition: background ease-in-out 200ms, border ease-in-out 200ms;
    cursor: pointer;
    filter: drop-shadow(10px 8px 12px rgba(26, 26, 26, 40%));
    user-select: none;
}

.control-button:hover{
    background: #E0AFA0;
    border: 1px solid #E0AFA0;
}

.seperator{
    display: block;
    width: 400px;
    height: 8px;
    background: #E0AFA0;
    border-radius: 10px;
    margin: 1rem auto;
    transition: width ease-in-out 200ms;
}

footer{
    text-align: center;
    color: #1A1A1A;
    opacity: 60%;
    transition: opacity ease-in-out 200ms;
    cursor: default;
}

footer:hover{
    opacity: 100%;
}
</style>