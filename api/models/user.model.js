import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACUCAMAAAA9M+IXAAAAMFBMVEXk5ueutLfq7O3n6eqqsbSxt7qnrrHh4+S5vsHd4OHW2dq/xMbGyszT1tjb3d/P09QTQwBKAAAEFUlEQVR4nO2b25arIAxAxYAgoP7/3x5Qp9PO9AIEE2Yddh/6uldWDATCMHQ6nU6n0+l0Op1Op9MiANwGicA4DvNqrZ31MI5tW8Mwb06JL5Tb9NCqMWjr1SSl+EbKSXnbojFob8S96rey2XRrwuCVfCa7Cwu1tZTFMCwvXQ8mtXBL3oDZvZfdQ+wbyQiw6rNt8DVrE75bimz0lS0khE+0DUwbd3whwzYEmNs3yzb6csrmxTbCmQ+wTJm2AcvlCzpfVgijmXQHk5sKEemYbH1JcNnKw1xmG+DQHYtSYQ+vp/eFtaAqnKiVXtcU2wrhyW0twlaomdo3YYv7Gkkd3ll9lnoXXuKPbcEEN2wdaD82KK5iJ24k9S2vYiek2YAouieUjVv+PvcXlBuHEVcXRNyXUWYD1pZ227vidQkXNlgq6NJ9a7DhdQl7thq6cqHTLWx7HnTpKtl/qUtl+39Gt1eG63Qp6y6qrzygbN7LD3BuGMpmGG0rDaHtiDkTOXQp97t/rJsYZnSvRnuOg42uIm3csdlAfWZqkac4xGd6M6o2SOozMlw20N8Or5ijBtIlbQccIrgMlxOIUz3FcBNYnr0898K6MHvJy8IBpI6J/NSlv6Y6fIvSgfwa5ZuSI3/HduMOBRszyWZb1LSRLxAPZH5uim1W5CBvvoXwcOGlb4ZtA3N6iTOFzUwVwuxSEmLiq2A/2Z4OGj+Elj9tvwHt3grLsDi0YxsfHizuzXS0Y65fv4FhddOTHJbT5NcWh+VjiI2KaSrPdJVCqRDYFl13YBzs5p05cH6zQ0sz8k+AEEw9778/8JTmNITjv03fI6KrXXxIBKVi1h6Ja1xMCLvqL39+gse652soAvJnMYvak1B7Gs/syjDC6s94fljURJS2wPblAeh5cyGibz0fmSblV45HViEDvBNZrl9xNt4Sr8gAm3n9JOmjsTJ+JcuKuNwWq96UDc0hJGhr0LKRSW3z1RGOWVBFNhKy+NokDo3Ox414FurKIx1r0PdTP5Fiu6auweyrpcE9k7miLRqXxIY3m9Bs1K5qoOvnwb2wrWu7XRXaL+GKNQLGCrM3n3xNrSIcEuHa0B6+os4XB+vFiXATrnHDknwEVsEXf91WY/aVzrfKCFY6E27khTS2uy8mvlBhaDsTRD6Q1YQ6viT19rdvYf0dUW+8ylFF63GFWbEyigb4ADUOgvMtSV+mVNjJvpMvvf2vgjTZQ3EX7sY/kztPMnJ9ZycqyxaQLz/R5H1tbEXsRtakGXdwM1+BcJaFUzdnrUDPauPJeEmMn33GI5NfEvN/aDuptQH/TrUKqcMauongisTSS96gvSCxzazxvKsGiS+JgXPreEfiIybdQNWNJI7I4Yb2K5LWY3K0689IPeKDsQ2SZDv1+AftHDfTHwFIWwAAAABJRU5ErkJggg==",
    },
}, {timestamps: true})  

const User = mongoose.model('User', userSchema);

export default User;    