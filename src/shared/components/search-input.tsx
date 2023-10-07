import { $, component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export const SearchInput = component$(() => {

    const navigate = useNavigate();
    const searchInput = useSignal('');
    

    const handleSubmit = $(() => {
        navigate(`/search/${ searchInput.value }`)
    });

    return (
        <div class="search-input">
            <input type="text" bind:value={searchInput} />

            <button onClick$={ handleSubmit }>Buscar</button>
        </div>

    )
});