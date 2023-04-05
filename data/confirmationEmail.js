const confirmationEmail = (verifyingLink) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="background-color: #F5F5F5; font-family: Arial, sans-serif; color: #1E1F28;">

  <table cellpadding="0" cellspacing="0" width="100%" align="center" style="max-width: 600px; margin: 0 auto;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <img src="https://thumbs.dreamstime.com/b/watercolor-fork-knife-circle-hand-painted-illustration-isolated-white-green-round-frame-icon-perfect-blogger-cook-160781583.jpg" alt="So Yummy Logo" width="120" height="120" style="display: block;">
      </td>
    </tr>
    <tr>
      <td style="background-color: #FFFFFF; padding: 30px; border-radius: 10px;">
        <h1 style="font-size: 28px; margin-bottom: 0;">Welcome to <span style="color: #8BAA36"> So </span> Yummy! </h1>

        <p style="font-size: 16px; line-height: 1.5; margin-top: 20px;">We believe that So Yummy has the potential to revolutionize the way that
    people approach meal planning and preparation, and we'd love for you to be a part of it! <a href=${verifyingLink}
      style="color: #8BAA36; text-decoration: none;">Verify</a> your email to learn more about our work! </p>

        <p style="font-size: 16px; line-height: 1.5; margin-top: 20px;">Best,<br>
    So Yummy Team</p>

      </td>
    </tr>
  </table>
</body>
</html>

    `;
};

module.exports = confirmationEmail;
