<router-link tag="h3" :to="{name: 'here-api-map-tool'}" class="cursor-pointer flex items-center font-normal dim text-white mb-6 text-base no-underline">
    @if($svg)
    {!! $svg !!}
    @else
    <svg class="sidebar-icon" fill="#b3c1d1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 0l6 4 8-4 6 4v16l-6-4-8 4-6-4V0zm7 6v11l6-3V3L7 6z" />
    </svg>
    @endif

    {{$name}}
    </span>
</router-link>