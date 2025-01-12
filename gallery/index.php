<?php

require_once '../lib/boot.php';

use Photobooth\Service\AssetService;
use Photobooth\Utility\PathUtility;

$assetService = AssetService::getInstance();
$pageTitle = $config['ui']['branding'] . ' Gallery';
$photoswipe = true;
$randomImage = false;
$remoteBuzzer = true;

include PathUtility::getAbsolutePath('template/components/main.head.php');
?>
<body>
    <?php include PathUtility::getAbsolutePath('template/components/gallery.php'); ?>

    <script>
        onStandaloneGalleryView = true;
    </script>

    <?php include PathUtility::getAbsolutePath('template/components/send-mail.php'); ?>
    <?php include PathUtility::getAbsolutePath('template/components/main.footer.php'); ?>

    <script src="<?=$assetService->getUrl('resources/js/preview.js')?>"></script>
    <script src="<?=$assetService->getUrl('resources/js/core.js')?>"></script>
    <script src="<?=$assetService->getUrl('resources/js/gallery.js')?>"></script>
    <?php if ($config['gallery']['db_check_enabled']): ?>
    <script src="<?=$assetService->getUrl('resources/js/gallery-updatecheck.js')?>"></script>
    <?php endif; ?>

    <?php require_once PathUtility::getAbsolutePath('lib/services_start.php'); ?>
</body>
</html>
