const config = {
    login_retries : +process.env.LOGIN_RETRY_COUNT || 3,
};

module.exports = {config};